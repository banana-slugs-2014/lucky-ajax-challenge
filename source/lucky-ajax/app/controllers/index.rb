get '/' do
  erb :index
end

post '/rolls' do
  roll = Roll.create(params[:value])

  "#{roll.value}"
end
