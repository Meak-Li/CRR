# Generated by Django 4.1.5 on 2023-04-12 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_users'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='classes',
            field=models.CharField(default=1, max_length=64, verbose_name='管理的班级'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userinfo',
            name='college',
            field=models.CharField(default=2, max_length=32, verbose_name='学院'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userinfo',
            name='department',
            field=models.CharField(default=1, max_length=32, verbose_name='部门'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userinfo',
            name='position',
            field=models.CharField(default=1, max_length=32, verbose_name='职位'),
            preserve_default=False,
        ),
    ]
