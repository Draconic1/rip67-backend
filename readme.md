* `npm i` - установить все модули
* Заполнить `db.config.js`
* `npm run mysql-admin` - запустить админ панель для mysql (настройки в папке `app/adminConfig`, пароль `QQqq11`, по умолчанию адрес http://127.0.0.1:8082/)
* `npm start` - запустить сервер (Порт задается в `server.js`, по умолчанию адрес http://127.0.0.1:8080/)
* Стандартный пользователь кинотеатра: логин `admin`, пароль `admin`

Заметки:
1. Модуль админ панели https://simov.github.io/express-admin/
2. Использованные ститьи <br>
https://www.bezkoder.com/node-js-express-sequelize-mysql/ <br>
https://www.bezkoder.com/node-js-jwt-authentication-mysql/ <br>
Не использовал https://www.bezkoder.com/react-redux-mysql-crud/ <br>
https://www.bezkoder.com/react-node-express-mysql/ <br>
Не использовал https://www.bezkoder.com/react-hooks-redux-login-registration-example/ <br>
https://www.bezkoder.com/react-redux-login-example-toolkit-hooks/
3. В панели администратора отображаются все заказы, но при этом происходит шлюк в корзине и в ней тоже отображается лишние. Думаю не страшно