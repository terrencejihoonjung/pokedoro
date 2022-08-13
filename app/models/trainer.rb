class Trainer < ApplicationRecord
    has_secure_password
    has_many :pokemons

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :bio, length: { maximum: 300 }
end
