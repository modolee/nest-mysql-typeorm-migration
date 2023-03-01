#!/bin/bash

CMD="docker compose \
  -p seeding-tutorial \
  -f docker-compose.yml"

function build()
{
  echo "##### Docker Compose Build #####"
  eval "$CMD" --profile "$1" --env-file "$2" build
}

function run()
{
  echo "##### Docker Compose Run #####"
  eval "$CMD" --profile "$1" --env-file "$2" up --remove-orphans
}

function menu()
{
  PS3="빌드와 실행 방식을 선택하세요 > "
  COLUMNS=30
  options=("Build and Run" "Run" "Quit")
  select yn in "${options[@]}"; do
      case $yn in
          "Build and Run" ) build "$1" "$2"; run "$1" "$2"; break;;
          "Run" )           run   "$1" "$2"; break;;
          "Quit" )          exit;;
      esac
  done
}

menu "database" ".env"