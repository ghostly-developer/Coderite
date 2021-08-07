from django.db import models
from django.db.models.fields import CharField
from django_mysql.models import ListCharField
from django_mysql.models.base import Model
from django.core.validators import FileExtensionValidator

STATUS = (
    (0, 'Draft'),
    (1, 'Published')
)
# Create your models here.
class Post(models.Model):
    image = models.FileField(upload_to = 'coderite/assets', validators=[FileExtensionValidator(['svg'])])
    slug = models.SlugField(max_length=200, unique=True)
    title = models.CharField(max_length=250)
    author = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    created_on = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    Tags = ListCharField(
        base_field=CharField(max_length=15),
        size=5,
        max_length=(5*20)
    )
    status = models.IntegerField(choices=STATUS, default=0)

class Meta:
    ordering = ['-created_on']

def __str__(self):
    return self.title

# Create your models here.
