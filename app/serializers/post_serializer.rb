class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :link, :category, :user_id
end
