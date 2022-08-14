class AddForeignKeyToPokemons < ActiveRecord::Migration[7.0]
  def change
    add_reference :pokemons, :trainer, index: true, foreign_key: true
  end
end
