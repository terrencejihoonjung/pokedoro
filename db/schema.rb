# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_18_234033) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friend_requests", force: :cascade do |t|
    t.integer "requestor_id"
    t.integer "receiver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "friend_a_id"
    t.integer "friend_b_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.integer "height"
    t.integer "weight"
    t.string "image"
    t.string "poketype"
    t.integer "base_experience"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "trainer_id"
    t.index ["trainer_id"], name: "index_pokemons_on_trainer_id"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.text "bio"
    t.boolean "has_pokemon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "pokemons", "trainers"
end
