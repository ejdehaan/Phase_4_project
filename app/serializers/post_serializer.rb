class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :link, :category, :id
end
