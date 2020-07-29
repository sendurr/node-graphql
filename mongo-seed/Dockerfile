FROM mongo

COPY member.json /member.json
COPY personalInfo.json /personalInfo.json
COPY planInfo.json /planInfo.json

CMD mongoimport --host mongodb --db mydb --collection member --type json --file /member.json --jsonArray
CMD mongoimport --host mongodb --db mydb --collection personalInfo --type json --file /personalInfo.json --jsonArray
CMD mongoimport --host mongodb --db mydb --collection planInfo --type json --file /planInfo.json --jsonArray