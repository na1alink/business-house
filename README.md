# Описание
Лендинг для Агенства недвижимости «Деловой дом» 

## Технологии
1. Vite: Иинструмент для настройки среды разработки и сборки проекта
2. Scss: Препроцессор CSS, который упрощает и ускоряет написание кода
3. JavaScript: Язык программирования
4. GSAP: Библиотека JavaScript для высокопроизводительной анимации


## Установка

1. Клонирование репозитория

`https://github.com/na1alink/business-house`

2. Переход в директорию business-house

`cd business-house`

3. Установка зависимостей

`npm install`



## Доступные скрипты

### `npm run dev`
Запуск сервера разработки, для локальной разработки

### `npm run build`
Сначала выполняется сборка TypeScript, чтобы убедиться, что все типы правильно проверены и скомпилированы. Затем Vite собирает приложение для продакшена, оптимизируя и минифицируя код

### `npm run preview`
Запускает локальный сервер для предпросмотра собранного приложения



## Деплой на GitHub Pages

Для автоматического деплоя проекта на GitHub Pages используется GitHub Actions. После каждого пуша в ветку `main`, GitHub Actions автоматически собирает проект и публикует его на GitHub Pages.

[![GitHub Actions Status](https://github.com/na1alink/business-house/actions/workflows/deploy.yml/badge.svg)](https://github.com/na1alink/business-house/actions)

Проект доступен по ссылке: [https://na1alink.github.io/business-house](https://na1alink.github.io/business-house)
