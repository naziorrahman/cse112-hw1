Name  : Md Nazior Rahman
PID   : A11456525
Course: CSE 112 (BlueJay - DB/ServerSide Team)

1) Clone the git repository
2)  start the database invoking the following command "npm start"
    This command will start the database.
3) POST, GET, and DELETE datas using the following commands

POST on the database:
---------
	curl -X POST localhost:3000/api/comment --data "comment=XXX"
(replace XXX with appropriate message)

GET the data:
----------
	curl -X GET localhost:3000/api/comment --data
(This command will invoke all the datas from the database)

DELETE data using their respective ID:
-------
	curl -X DELETE localhost:3000/api/comment/XXX
(where XXX is the ID, from the database)
