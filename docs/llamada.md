POST /api/perfil
Content-Type: application/json

Request body:
{
"nombre": "Juan",
"apellido": "Perez",
"username": "juanp",
"password": "MiClave123"
}

Response 200:
{ "ok": true, "message": "Usuario creado" }

Response 400:
{ "ok": false, "error": "Faltan campos" }
