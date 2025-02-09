from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Produto
from .serializers import ProdutosSerializer

class ProdutoList(APIView):
    def get(self, request):
        produtos = Produto.objects.all()
        serializer = ProdutosSerializer(produtos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)