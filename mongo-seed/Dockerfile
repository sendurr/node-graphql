FROM mongo

COPY member.json /member.json
COPY person.json /personalInfo.json
COPY subscription.json /planInfo.json
COPY coverage.json /coverage.json


CMD mongoimport --host mongodb --db mydb --collection member --type json --file /member.json --jsonArray
CMD mongoimport --host mongodb --db mydb --collection person --type json --file /person.json --jsonArray
CMD mongoimport --host mongodb --db mydb --collection subscription --type json --file /subscription.json --jsonArray
CMD mongoimport --host mongodb --db mydb --collection coverage --type json --file /coverage.json --jsonArray