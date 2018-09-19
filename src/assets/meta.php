<?php

function get_mp3_stream_title($streaming_url, $interval, $offset = 0)
{
    $needle = 'StreamTitle=';
    $ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36';

    $opts = ['http' =>
        [
            'method' => 'GET',
            'header' => 'Icy-MetaData: 1',
            'user_agent' => $ua
        ]
    ];

    $context = stream_context_create($opts);

    if ($stream = fopen($streaming_url, 'r', false, $context)) {

        $buffer = stream_get_contents($stream, $interval, $offset);
        fclose($stream);

        if (strpos($buffer, $needle) !== false) {
            $currentSectionTwo = explode($needle, $buffer);
            $title = $currentSectionTwo[1];
            return substr($title, 1, strpos($title, ';') - 2);
        } else
            return get_mp3_stream_title($streaming_url, $interval,$offset + $interval);

        return false;
    }

    throw new Exception("Unable to open stream [{$streaming_url}]");
}

if (!empty($_GET['id'])) {

    $id = (int) $_GET['id'];
    $cache_file = __DIR__ . "/cache/$id.json";
    $cache_time = 15; // 15 sec cache time

    if (file_exists($cache_file) && time() - $cache_time < filemtime($cache_file)) {
        die(file_get_contents($cache_file));
    } else {
        $stations = json_decode(file_get_contents(__DIR__ . '/stations.json'));

        if (!empty($stations[$id]->radio)) {
            $data = [
                "track" => get_mp3_stream_title($stations[$id]->radio, 19200)
            ];
            file_put_contents($cache_file, json_encode($data, JSON_UNESCAPED_UNICODE));
            die(json_encode($data, JSON_UNESCAPED_UNICODE));
        }
    }
}

if (!empty($_GET['url']) && filter_var($_GET['url'], FILTER_VALIDATE_URL)) {

    $url = $_GET['url'];

    $data = [
        "track" => get_mp3_stream_title($url, 19200)
    ];
    die(json_encode($data, JSON_UNESCAPED_UNICODE));
}
