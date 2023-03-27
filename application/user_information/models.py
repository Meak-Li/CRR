from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=32)

    class Meta:
        verbose_name_plural = verbose_name = "user"

    def __str__(self):
        return self.name