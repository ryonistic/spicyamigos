"""serializers handle the conversion of model data into
JSON and then that makes it easier for APIView to use it"""
from rest_framework import serializers
from store.models import Item


class ItemSerializer(serializers.ModelSerializer):
    """Serializer manages the fields that are going
    to be sent as JSON data"""
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
            'tags',
            'is_vegan',
            'is_deliverable',
            'is_featured')
