# Laporan ASN

Web app for goverment employees to create daily report, convert user input into report pdf format.

# Tech Stack

- Frontend : React
- Backend : NodeJS
- Database : MongoDB

# API Spec

## Login

Request :
- Method : POST
- EndPoint : `api/login`
- Header : 
    - Content-Type : application/json
    - Accept : application/json
- Body :
```json
{
    "nip": "Number",
    "password": "String"
}
```

Response :
```json
{
    "code": "Number",
    "status": "String",
    "data": {
        "nip": "Number",
        "name": "String",
        "pos": "String",
        "bossName": "String",
        "bossPos": "String",
        "city": "String"
    }
}
```

## Register

Request :
- Method : POST
- EndPoint : `api/register`
- Header : 
    - Content-Type : application/json
    - Accept : application/json
- Body :
```json
{
    "nip": "Number",
    "password": "String",
    "name": "String",
    "pos": "String",
    "bossName": "String",
    "bossPos": "String",
    "city": "String"
}
```

Response :
```json
{
    "code": "Number",
    "status": "String"
}
```