from django.conf.urls import url

from .views import index, TodoDetailView

urlpatterns = [
    url(r'^', index),
    url(r'^edit/<int:pk>', TodoDetailView.as_view()),
    url(r'^delete/<int:pk>', TodoDetailView.as_view()),
]