# Fresh + Fauna

## Getting Started

- Clone the code.

**Database Configuration (With Script)**

- Create a new database in Fauna.
- Create an admin key for the DB in Fauna. Add the admin key in your `.env` file along with domain.

```bash
FAUNA_DOMAIN=db.us.fauna.com
FAUNA_ADMIN_SECRET=fnADxxxxx.....
```

- Run the db setup script `deno run ./utils/fauna-setup.ts`
- Add the generated `secrect` in your `.env` file

```bash
FAUNA_DOMAIN=db.us.fauna.com
FAUNA_SECRET=fnAEv0CwYjAATZbFPpDmgXCtYB7dH1z-suwsK_O9
FAUNA_ADMIN_SECRET=fnAEvz58LhAASs26ne2IcM-OjSdhZh6LWXFtctS1
```

- Run the code `deno task start`

## Data Model

![Data Model](https://i.imgur.com/YqAVh9l.png)

Fauna configuration script description: 

The setup script creates the following resources in Fauna.

*Collections:*

- Post
- User
- Comment

*Index:*

- comments_by_post
- user_by_email

*Roles:* 

- AuthRole (For Authenticated Users)
- UnAuthRole (For UnAuthenticated Users)

DO NOT REVEAL any keys 🔑 in the application. It is a good practice to rotate the Admin key every 30 days.