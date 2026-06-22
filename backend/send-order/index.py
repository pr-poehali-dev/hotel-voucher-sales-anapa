import json
import os  # noqa

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту владельца через Mail.ru SMTP"""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    contact = body.get('contact', '').strip()
    city = body.get('city', '').strip()
    product = body.get('product', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    smtp_user = '6456609@list.ru'
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = '6456609@list.ru'

    subject = f'Новая заявка с сайта ЧекГарант{" — " + city if city else ""}'

    lines = [
        f'Имя: {name}',
        f'Телефон: {phone}',
    ]
    if email:
        lines.append(f'Email: {email}')
    if contact:
        lines.append(f'Способ связи: {contact}')
    if product:
        lines.append(f'Интересует: {product}')
    if city:
        lines.append(f'Город: {city}')

    text_body = '\n'.join(lines)

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = smtp_user
    msg['To'] = to_email

    html_body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px;">
      <h2 style="color: #1a3a5c;">Новая заявка с сайта ЧекГарант</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold;">Имя:</td><td style="padding: 8px;">{name}</td></tr>
        <tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold;">Телефон:</td><td style="padding: 8px;">{phone}</td></tr>
        {'<tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">' + email + '</td></tr>' if email else ''}
        {'<tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold;">Способ связи:</td><td style="padding: 8px;">' + contact + '</td></tr>' if contact else ''}
        {'<tr><td style="padding: 8px; font-weight: bold;">Интересует:</td><td style="padding: 8px;"><strong>' + product + '</strong></td></tr>' if product else ''}
        {'<tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold;">Город:</td><td style="padding: 8px;">' + city + '</td></tr>' if city else ''}
      </table>
    </div>
    """

    msg.attach(MIMEText(text_body, 'plain', 'utf-8'))
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'ok': True})
    }