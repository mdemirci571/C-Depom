# Generated by Django 4.2.1 on 2023-05-18 19:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Blog Kategori', 'verbose_name_plural': 'Blog Kategoriler'},
        ),
        migrations.AlterModelOptions(
            name='post',
            options={'verbose_name': 'Blog Yazısı', 'verbose_name_plural': 'Blog Yazıları'},
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=64, verbose_name='Kategori Adı'),
        ),
        migrations.AlterField(
            model_name='post',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.category', verbose_name='Kategori'),
        ),
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(verbose_name='İçerik'),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma T.'),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=128, verbose_name='Başlık'),
        ),
        migrations.AlterField(
            model_name='post',
            name='updated_date',
            field=models.DateTimeField(auto_now=True, verbose_name='Güncelleme T.'),
        ),
        migrations.AlterField(
            model_name='post',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Kullanıcı'),
        ),
    ]
