from rest_framework import serializers
from .models import Produto

class ProdutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ['id', 'titulo','descricao', 'data_criacao', 'valor', 'foto']