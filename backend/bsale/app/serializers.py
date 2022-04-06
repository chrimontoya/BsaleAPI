from itertools import product
from rest_framework import serializers
from .models import Category,Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'
        

class ProductSerializer(serializers.ModelSerializer):
    category_name=serializers.CharField(read_only=True,source="category.name")
    #category=CategorySerializer(read_only=True)
    category_id=serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(),source="category")
    class Meta:
        model=Product
        exclude=["category"]