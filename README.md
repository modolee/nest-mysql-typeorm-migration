# Migration (Seeding) Tutorial using TypeORM for MySQL with Nest.js

- Nest.js, MySQL을 이용해서 프로젝트를 진행할 때, TypeORM을 사용해서 개발하는 경우가 많다.
- TypeORM의 migration 기능을 이용해서 초기 데이터 (Seed Data)를 생성해 보자.

## 폴더 구조
### api
- Nest.js 프로젝트를 기반으로 TypeORM 마이그레이션이 적용되어 있음
- 자세한 사용법은 [api/README.md 참고](./api/README.md)

### mysql
- Docker로 로컬에 MySQL 컨테이너를 생성해서 사용할 수 있음
- `./start.sh` 실행 > `2. Run` 선택
- 컨테이너가 띄워지면 `localhost:3306`로 접속 가능
- 접속 정보는 `mysql/.env.example` 파일을 복사해서 `mysql/.env` 파일을 생성한 후 수정 또는 그대로 사용