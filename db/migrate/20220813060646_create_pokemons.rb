class CreatePokemons < ActiveRecord::Migration[7.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :height
      t.integer :weight
      t.string :image
      t.string :type
      t.integer :base_experience

      t.timestamps
    end
  end
end
