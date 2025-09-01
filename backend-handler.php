<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['username']) && isset($data['password'])) {
    // Lógica de verificación:
    if ($data['username'] === 'test' && $data['password'] === '123') {
        echo json_encode(['status' => 'ok']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Credenciales inválidas']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Faltan datos']);
}
?>