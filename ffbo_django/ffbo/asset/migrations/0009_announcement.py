# Generated by Django 3.0.7 on 2020-06-23 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0008_post'),
    ]

    operations = [
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.TextField()),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]