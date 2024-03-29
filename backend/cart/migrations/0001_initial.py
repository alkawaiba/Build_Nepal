# Generated by Django 4.0.4 on 2022-04-27 07:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number_of_order', models.IntegerField(default=1, verbose_name='Number of Order')),
                ('total_price', models.FloatField(help_text='Will be calculated when you save.', verbose_name='Total Price')),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='service.service', verbose_name='Service')),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orders', models.ManyToManyField(blank=True, to='cart.order', verbose_name='Order')),
            ],
        ),
    ]
