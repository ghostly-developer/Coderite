from .import views
from django.urls import path

urlpatterns = [
    path('', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('register', views.register, name='register'),
    path('addpost', views.AddPostView.as_view(), name='addpost')
]