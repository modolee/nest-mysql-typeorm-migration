# Nest.js API

# DB Migration / Seed 실행 방법

## 환경변수 세팅

- `.env.example` 파일을 복사하여 `.env` 파일을 생성

## Migration / Seed 파일 생성

- Migration: 아래 명령 실행 시 `src/database/migrations` 폴더에 Migration 작성을 위한 파일이 생성됨

```sh
npm run migration:create --name=<원하는 파일명>
```

- Seed: 아래 명령 실행 시 `src/database/seeds` 폴더에 Seed 작성을 위한 파일이 생성됨

```sh
npm run seed:create --name=<원하는 파일명>
```

## Migration / Seed 파일 내용 작성

[예제 파일 참고](./src//database//seeds/1677649485175-SeedUsers.ts)

## Migration / Seed 실행

- Migration

```sh
npm run migration:run
```

- Seed

```sh
npm run seed:run
```

## Migration / Seed 복구

- Migration

```sh
npm run migration:revert
```

- Seed

```sh
npm run seed:revert
```
