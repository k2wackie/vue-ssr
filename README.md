# vue-ssr

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

CREATE TABLE member (
mb_id varchar(30) not null,
mb_password varchar(191) not null,
mb_name varchar(191) not null,
mb_birth date,
mb_gender enum('M','F') not null default 'M',
mb_email varchar(191) not null default '',
mb_phone varchar(191) not null default '',
mb_zip varchar(10) not null default '',
mb_addr1 varchar(191) not null default '',
mb_addr2 varchar(191) not null default '',
mb_level tinyint unsigned default 0,
mb_create_at datetime not null,
mb_create_ip char(15) not null,
mb_update_at datetime not null,
mb_update_ip char(15) not null default '',
mb_login_at datetime,
mb_login_ip char(15) not null default '',
mb_leave_at datetime,
primary key (mb_id),
unique key (mb_email),
index (mb_leave_at)
);
