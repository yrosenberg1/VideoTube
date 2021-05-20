# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Like.destroy_all
Comment.destroy_all
Video.destroy_all
User.destroy_all

u1 = User.create!({email: "demo@gmail.com", password: "secretPassword", first_name: "Demo", last_name: "Account"})
u2 = User.create!({email: "nemmo@gmail.com", password: "password", first_name: "Viral", last_name: "Vids"})
u3 = User.create!({email: "denmo@gmail.com", password: "password", first_name: "Hot", last_name: "Takes"})
u4 = User.create!({email: "lemmo@gmail.com", password: "password", first_name: "Sports", last_name: "clips"})
u5 = User.create!({email: "zemmo@gmail.com", password: "password", first_name: "Terrific", last_name: "Shots"})
u6 = User.create!({email: "aemmo@gmail.com", password: "password", first_name: "React", last_name: "Redux"})
u7 = User.create!({email: "cemmo@gmail.com", password: "password", first_name: "Rails ", last_name: "Media"})



v1 = Video.create!({
    title: "The beach", 
    description: "The beach during the summer. #SummerTime #Beach", 
    uploader_id: u1.id
})
v2 = Video.create!({
    title: "Baseball", 
    description: "A close up of a man swinging at a pitch. #SummerTime #BaseballSzn", 
    uploader_id: u4.id
})
v3 = Video.create!({
    title: "Sunset by the waterfront", 
    description: "the sun setting over Venice Beach. ", 
    uploader_id: u2.id
})
v4 = Video.create!({
    title: "Busy Street", 
    description: "Video of a busy street in the city.", 
    uploader_id: u3.id
})
v5 = Video.create!({
    title: "Chess", 
    description: "Video of a game of chess.", 
    uploader_id: u1.id
})
v6 = Video.create!({
    title: "Coding", 
    description: "A shot of coding.", 
    uploader_id: u6.id
})
v7 = Video.create!({
    title: "Coffee", 
    description: "Pouring Milk into a freshly brewed coffee.", 
    uploader_id: u1.id
})
v8 = Video.create!({
    title: "Amusement Park", 
    description: "People enjoying a nice day at the amusement Park.", 
    uploader_id: u7.id
})
v9 = Video.create!({
    title: "NightLife", 
    description: "A video montage of a busy highway at night.", 
    uploader_id: u2.id
})
v10 = Video.create!({
    title: "Highway", 
    description: "A overhead shot of a car driving on a highway", 
    uploader_id: u3.id
})
v11 = Video.create!({
    title: "Layup", 
    description: "A basketball player makes a layup in a practice.", 
    uploader_id: u4.id
})
v12 = Video.create!({
    title: "Moon", 
    description: "A shot of the moon over the sea at night.", 
    uploader_id: u1.id
})
v13 = Video.create!({
    title: "Soccer", 
    description: "A player takes the game winning shot!", 
    uploader_id: u4.id
})
v14 = Video.create!({
    title: "Sushi", 
    description: "Artistic Sushi.", 
    uploader_id: u5.id
})
v15 = Video.create!({
    title: "Sea Life", 
    description: "An underwater shot of the aqautic sea life.", 
    uploader_id: u4.id
})
v16 = Video.create!({
    title: "Winter Sports", 
    description: "A man riding his snowmobile down the curvy path.", 
    uploader_id: u7.id
})

video_1 = URI.open('https://video-tube-seed.s3.amazonaws.com/181015_13_Venice+Beach+Drone_25.mp4')
video_2 = URI.open('https://video-tube-seed.s3.amazonaws.com/Baseball.mp4')
video_3 = URI.open('https://video-tube-seed.s3.amazonaws.com/Beach.mp4')
video_4 = URI.open('https://video-tube-seed.s3.amazonaws.com/Busy+Street.mp4')
video_5 = URI.open('https://video-tube-seed.s3.amazonaws.com/Highway+Driving.mp4')
video_6 = URI.open('https://video-tube-seed.s3.amazonaws.com/Highway+at+night.mp4')
video_7 = URI.open('https://video-tube-seed.s3.amazonaws.com/Layup.mp4')
video_8 = URI.open('https://video-tube-seed.s3.amazonaws.com/MoonandSeaHDFInalRenderH264.mov')
video_9 = URI.open('https://video-tube-seed.s3.amazonaws.com/Underwater+SeaLife.mp4')
video_10 = URI.open('https://video-tube-seed.s3.amazonaws.com/Winter+sports.mp4')
video_11 = URI.open('https://video-tube-seed.s3.amazonaws.com/chess.mp4')
video_12 = URI.open('https://video-tube-seed.s3.amazonaws.com/coding.mp4')
video_13 = URI.open('https://video-tube-seed.s3.amazonaws.com/coffee.mp4')
video_14 = URI.open('https://video-tube-seed.s3.amazonaws.com/ferris+wheel.mp4')
video_15= URI.open('https://video-tube-seed.s3.amazonaws.com/soccer.mp4')
video_16 = URI.open('https://video-tube-seed.s3.amazonaws.com/sushi.mp4')

v1.video_file.attach(io: video_3, filename: "Beach.mp4") 
v2.video_file.attach(io: video_2, filename: "Baseball.mp4") 
v3.video_file.attach(io: video_1, filename: "Venice-Beach.mp4") 
v4.video_file.attach(io: video_4, filename: "Busy-Intersection.mp4") 
v5.video_file.attach(io: video_11, filename: "Chess-game.mp4") 
v6.video_file.attach(io: video_12, filename: "coding.mp4") 
v7.video_file.attach(io: video_13, filename: "coffee.mp4") 
v8.video_file.attach(io: video_14, filename: "Ferris-wheel.mp4") 
v9.video_file.attach(io: video_6, filename: "Highway-at-night.mp4") 
v10.video_file.attach(io: video_5, filename: "on-the-road.mp4") 
v11.video_file.attach(io: video_7, filename: "layup-basketball.mp4") 
v12.video_file.attach(io: video_8, filename: "moon-and-sea.mp4") 
v13.video_file.attach(io: video_15, filename: "soccer-shot.mp4") 
v14.video_file.attach(io: video_16, filename: "sushi.mp4") 
v15.video_file.attach(io: video_9, filename: "underwater-Sea-life.mp4") 
v16.video_file.attach(io: video_10, filename: "winter-activity.mp4") 

l1 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v1.id})
l2 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v2.id})
l3 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v3.id})
l4 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v4.id})
l5 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v5.id})
l6 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v6.id})
l7 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v7.id})
l8 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v8.id})
l9 = Like.create!({like_dislike: true, liker_id: u2.id, likeable_type: "Video", likeable_id: v9.id})
l10 = Like.create!({like_dislike: false, liker_id: u2.id, likeable_type: "Video", likeable_id: v10.id})
l11 = Like.create!({like_dislike: false, liker_id: u2.id, likeable_type: "Video", likeable_id: v11.id})
l12 = Like.create!({like_dislike: false, liker_id: u2.id, likeable_type: "Video", likeable_id: v12.id})

l13 = Like.create!({like_dislike: true, liker_id: u3.id, likeable_type: "Video", likeable_id: v1.id})
l14 = Like.create!({like_dislike: true, liker_id: u4.id, likeable_type: "Video", likeable_id: v1.id})
l15 = Like.create!({like_dislike: true, liker_id: u5.id, likeable_type: "Video", likeable_id: v1.id})
l16 = Like.create!({like_dislike: true, liker_id: u6.id, likeable_type: "Video", likeable_id: v1.id})
l17 = Like.create!({like_dislike: true, liker_id: u7.id, likeable_type: "Video", likeable_id: v1.id})
l18 = Like.create!({like_dislike: true, liker_id: u8.id, likeable_type: "Video", likeable_id: v1.id})
l19 = Like.create!({like_dislike: true, liker_id: u9.id, likeable_type: "Video", likeable_id: v1.id})
l20 = Like.create!({like_dislike: true, liker_id: u10.id, likeable_type: "Video", likeable_id: v1.id})
l21 = Like.create!({like_dislike: true, liker_id: u11.id, likeable_type: "Video", likeable_id: v1.id})
l22 = Like.create!({like_dislike: false, liker_id: u12.id, likeable_type: "Video", likeable_id: v1.id})
l23 = Like.create!({like_dislike: false, liker_id: u13.id, likeable_type: "Video", likeable_id: v1.id})
l24 = Like.create!({like_dislike: false, liker_id: u14.id, likeable_type: "Video", likeable_id: v1.id})

c1 = Comment.create!(video_id: v1.id, commenter_id: u1.id, comment_body: "Enjoy the Video!")
c2 = Comment.create!(video_id: v1.id, commenter_id: u2.id, comment_body: "Great Content!", parent_comment_id: c1.id)
c3 = Comment.create!(video_id: v1.id, commenter_id: u3.id, comment_body: "Amazing view! Wish I was there!!!")
c4 = Comment.create!(video_id: v1.id, commenter_id: u4.id, comment_body: "Looks Amazing!")
c5 = Comment.create!(video_id: v1.id, commenter_id: u5.id, comment_body: "What is this????")
c6 = Comment.create!(video_id: v1.id, commenter_id: u6.id, comment_body: "nice")

l25 = Like.create!({like_dislike: true, liker_id: u1.id, likeable_type: "Comment", likeable_id: c2.id})
l26 = Like.create!({like_dislike: true, liker_id: u1.id, likeable_type: "Comment", likeable_id: c3.id})
l27 = Like.create!({like_dislike: true, liker_id: u7.id, likeable_type: "Comment", likeable_id: c2.id})
l27 = Like.create!({like_dislike: true, liker_id: u7.id, likeable_type: "Comment", likeable_id: c4.id})


