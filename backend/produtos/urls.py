from django.urls import path
from .views import ProdutoList

urlpatterns = [
    path('produtos/lista', ProdutoList.as_view(), name='lista_produtos'),
]