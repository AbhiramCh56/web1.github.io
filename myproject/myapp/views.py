from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from django.shortcuts import render

class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

def index(request):
    return render(request, 'index.html')