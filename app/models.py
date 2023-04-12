from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class UserInfo(AbstractUser):
    tel = models.CharField(max_length=32,verbose_name="电话")
    avatar = models.FileField(upload_to="avatars/", default="avatars/timg.jpg", verbose_name="头像")
    qq = models.CharField(max_length=50,verbose_name="qq")
    college = models.CharField(max_length=32, verbose_name="学院")
    department = models.CharField(max_length=32, verbose_name="部门")
    position = models.CharField(max_length=32, verbose_name="职位")
    classes = models.CharField(max_length=64, verbose_name="管理的班级")


class Room(models.Model):
    """会议室表"""
    caption = models.CharField(max_length=32,verbose_name="会议室名称")
    num = models.IntegerField(verbose_name="容纳人数")  # 容纳人数

    def __str__(self):
        return self.caption

    class Meta:
        verbose_name = "会议室信息"
        verbose_name_plural = verbose_name


class Book(models.Model):
    """会议室预订"""
    user = models.ForeignKey(to="UserInfo",on_delete=models.CASCADE)
    room = models.ForeignKey(to="Room",on_delete=models.CASCADE)
    date = models.DateField()
    time_choice = (
        (1, "8:50-9:35"),
        (2, "9:45-10:30"),
        (3, "10:45-11:30"),
        (4, "11:40-12:25"),
        (5, "13:50-14:35"),
        (6, "14:45-15:30"),
        (7, "15:45-16:30"),
        (8, "16:40-17:25"),
        (9, "18:30-19:15"),
        (10, "19:25-20:10"),
        (11, "20:20-21:05"),
        (12, "21:15-22:00")
    )

    time_id = models.IntegerField(choices=time_choice)

    def __str__(self):
        return str(self.user)+"预定了"+str(self.room)

    class Meta:
        verbose_name = "预定信息"
        verbose_name_plural = verbose_name
        unique_together = (
            ("room","date","time_id"),  # 这三个字段联合唯一，防止重复预订
        )
