from django.db import models
from django.core.validators import FileExtensionValidator
from django.urls import reverse

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
    field_tag = models.CharField(max_length=50, default="blank")
    level_tag = models.CharField(max_length=50, default="blank")
    lang_tag = models.CharField(max_length=50, default="blank")
    status = models.IntegerField(choices=STATUS, default=0)

    def get_absolute_url(self):
        return reverse('index.html', args=(str(self.id)))
class Meta:
    db_table = 'PostObjects'
    ordering = ['-created_on']

def __str__(self):
    return self.title

# Create your models here.
