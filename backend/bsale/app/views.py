from django.shortcuts import render
from .models import Category,Product
from rest_framework import viewsets
from .serializers import CategorySerializer,ProductSerializer

# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):

    queryset=Product.objects.all()
    serializer_class=ProductSerializer

    def get_queryset(self):
        products=Product.objects.all().order_by('category')
        category=self.request.GET.get('category')

        if category:
            products=products.filter(category=category)

        return products