"""serializers handle the conversion of model data into
JSON and then that makes it easier for APIView to use it"""
from rest_framework import serializers
from store.models import Item, Tag

class TagSerializer(serializers.ModelSerializer):
    category = serializers.CharField(read_only=True)

    class Meta:
        model = Tag


class ItemSerializer(serializers.ModelSerializer):
    """Serializer manages the fields that are going
    to be sent as JSON data"""
    category_name = serializers.CharField(source='tags.category', read_only=True)
    class Meta:
        """altering the meta properties of the inherited
        module"""
        model = Item
        fields = (
            'id',
            'name',
            'description',
            'price',
            'discount',
            'category_name',
            'is_vegan',
            'is_deliverable',
            'image',)
