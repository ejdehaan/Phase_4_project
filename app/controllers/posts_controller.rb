class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def show
      post = Post.find_by(id: params[:id])
      if post
        render json: post
      else
        render json: { error: "post not found" }, status: :not_found
      end
    end

    def create
        post = Post.create(post_params)
        render json: post, status: :created
      end
    
      def update
        post = Post.find_by(id: params[:id])
        post.update(post_params)
        render json: post
      end
    
      def destroy
        post = Post.find_by(id: params[:id])
        post.destroy
        head :no_content
      end
    
      private
      
      def post_params
        params.permit(:title, :image, :link, :category, :user_id)
      end

end
