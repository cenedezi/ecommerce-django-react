from django.db import models

class Produto(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    data_criacao = models.DateTimeField(auto_now_add=True)
    valor = models.FloatField()
    foto = models.ImageField()

    def __str__(self):
        return self.titulo

    class Meta:
        ordering = ['data_criacao']

