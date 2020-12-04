FROM centos:7

RUN yum install -y python3 python3-devel python3-pip unixODBC unixODBC-devel python3-setuptools gcc gcc-c++ https://download.dremio.com/odbc-driver/dremio-odbc-LATEST.x86_64.rpm && \
	pip3 install apache-superset sqlalchemy_dremio dataclasses psycopg2-binary && \
	export LC_ALL=en_US.UTF-8 && \
	superset db upgrade && \
	superset init && \
	export FLASK_APP=superset && \
	flask fab create-admin --username admin --firstname admin --lastname admin --email <email>  --password <password>

CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:80", "--timeout", "120", "--limit-request-line", "0", "--limit-request-field_size", "0", "superset.app:create_app()", "superset", "run"]
