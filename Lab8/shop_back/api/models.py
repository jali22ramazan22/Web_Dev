from django.db import models
class Category(models.Model):
    name = models.CharField(max_length=50)
    

class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    description = models.TimeField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category_id = models.ForeignKey('Category', on_delete=models.CASCADE)