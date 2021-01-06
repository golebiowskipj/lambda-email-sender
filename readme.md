# Email Sender

Netlify lambda function that is able to send emails.

It uses `https://www.mailjet.com/` as an SMPT provider and sends emails from `netlifylambdaemailsender@o2.pl`. The limit is set to 200/day by SMPT provider.

## Development

1. Clone repository
2. `cd` into repo directory
3. Create `.env` file in root directory and add there:
   - EMAIL_CLIENT_HOST = ...
   - EMAIL_CLIENT_PORT = ...
   - EMAIL_CLIENT_USER = ...
   - EMAIL_CLIENT_PASS = ...
4. Run `npm ci`
5. Run `npm run lambda-serve`
6. Serverless function will start on localhost:9000/sendEmail

## Routes

### POST /sendEmail

Required fields - `to`, `subject`, `msg`.
`to` field must be a valid email address.

```
POST /sendEmail HTTP/1.1
Host: localhost
Content-Type: application/json
Content-Length: 103
```

```
{
"to": "example@example.com",
"subject": "Test subject",
"msg":"Test content"
}
```

## LIVE

`https://mystifying-mahavira-9a87b3.netlify.app/.netlify/functions/sendEmail`
