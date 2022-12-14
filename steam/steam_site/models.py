from django.db import models

# Create your models here.
class Info(models.Model):
    name        = models.CharField(max_length=100)
    username    = models.CharField(max_length=100)
    email       = models.EmailField()
    created_at  = models.DateTimeField(auto_now_add=True)