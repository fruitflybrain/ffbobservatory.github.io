# Generated by Django 3.0.7 on 2020-06-21 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0006_auto_20200621_1923'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='member',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]