from django.shortcuts import render, redirect
from django.views import generic
from .models import Post
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from coderite.forms import SignUpForm

class PostList(generic.ListView):
    queryset = Post.objects.filter(status=1).order_by('-created_on')
    template_name = 'index.html'

class PostDetail(generic.DetailView):
    model = Post
    template_name = 'post_detail.html'

def register(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'register.html', {'form': form})

def PostFilter(request):
    if request.method=="POST":
        field_query = request.POST.get('field_tag')
        level_query = request.POST.get('level_tag')
        lang_query = request.POST.get('lang_tag')
        Postsearchobj = Post.objects.raw('select * from PostObjects where field_tag="'+field_query+'" level_tag="'+level_query+'"and lang_tag="'+lang_query+'"')
        return render(request, 'Index.html', {"Post": Postsearchobj})

    else:
        Postobj = Post.objects.raw('select * from PostObjects')
        return render(request, 'index.html', {"Post": Postobj})
