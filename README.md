# Мобильное радио (GitHub Pages)

Веб-плеер онлайн-радио:
- выбор станций из списка;
- фоновое воспроизведение (MediaSession API);
- управление через кнопки устройства.

## Как запустить

1. Создать репозиторий на GitHub (например, `radio-player`).
2. Загрузить файлы:
   - index.html
   - manifest.json
   - sw.js
   - README.md
   - icon-192.png и icon-512.png (пище любые PNG).
3. Settings → Pages → Source: main (или master`) branch, root `/ → Save.
4. Открыть ссылку https://<username>.github.io/radio-player/ на телефоне.
5. Android: Chrome → «Установить приложение / Add to Home Screen`.
   iOS: Safari → «На экран «Домой».

## Заглушки потоков

Некоторые станции имеют URL https://stream.example.com/....  
Заменить их на реальные: открыть index.html, найти STATIONS и поменять url.