# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>"json"}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>"json"}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>"json"}
#    api_video_comment_like POST   /api/videos/:video_id/comments/:comment_id/like(.:format)                                api/comments#like {:format=>"json"}
# api_video_comment_dislike POST   /api/videos/:video_id/comments/:comment_id/dislike(.:format)                             api/comments#dislike {:format=>"json"}
#    api_video_comment_undo POST   /api/videos/:video_id/comments/:comment_id/undo(.:format)                                api/comments#undo {:format=>"json"}
#  api_video_comment_change POST   /api/videos/:video_id/comments/:comment_id/change(.:format)                              api/comments#change {:format=>"json"}
#        api_video_comments GET    /api/videos/:video_id/comments(.:format)                                                 api/comments#index {:format=>"json"}
#                           POST   /api/videos/:video_id/comments(.:format)                                                 api/comments#create {:format=>"json"}
#         api_video_comment GET    /api/videos/:video_id/comments/:id(.:format)                                             api/comments#show {:format=>"json"}
#                           PATCH  /api/videos/:video_id/comments/:id(.:format)                                             api/comments#update {:format=>"json"}
#                           PUT    /api/videos/:video_id/comments/:id(.:format)                                             api/comments#update {:format=>"json"}
#                           DELETE /api/videos/:video_id/comments/:id(.:format)                                             api/comments#destroy {:format=>"json"}
#            api_video_like POST   /api/videos/:video_id/like(.:format)                                                     api/videos#like {:format=>"json"}
#         api_video_dislike POST   /api/videos/:video_id/dislike(.:format)                                                  api/videos#dislike {:format=>"json"}
#            api_video_undo POST   /api/videos/:video_id/undo(.:format)                                                     api/videos#undo {:format=>"json"}
#          api_video_change POST   /api/videos/:video_id/change(.:format)                                                   api/videos#change {:format=>"json"}
#                api_videos GET    /api/videos(.:format)                                                                    api/videos#index {:format=>"json"}
#                           POST   /api/videos(.:format)                                                                    api/videos#create {:format=>"json"}
#                 api_video GET    /api/videos/:id(.:format)                                                                api/videos#show {:format=>"json"}
#                           PATCH  /api/videos/:id(.:format)                                                                api/videos#update {:format=>"json"}
#                           PUT    /api/videos/:id(.:format)                                                                api/videos#update {:format=>"json"}
#                           DELETE /api/videos/:id(.:format)                                                                api/videos#destroy {:format=>"json"}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to:'static_pages#root'

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    # resources :comments, only: [:create, :destroy, :update, :index]
    resources :videos, only: [:create, :destroy, :update, :index, :show] do 
      resources :comments, only: [:create, :destroy, :update, :index, :show] do
        post :like, to: 'comments#like', as: 'like'
        post :dislike, to: 'comments#dislike', as: 'dislike'
        post :undo, to: 'comments#undo', as: 'undo'
        post :change, to: 'comments#change', as: 'change'
      end
      post :like, to: 'videos#like', as: 'like'
      post :dislike, to: 'videos#dislike', as: 'dislike'
      post :undo, to: 'videos#undo', as: 'undo'
      post :change, to: 'videos#change', as: 'change'
    end
    end
  
end
