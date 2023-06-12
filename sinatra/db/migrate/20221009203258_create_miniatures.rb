class CreateMiniatures < ActiveRecord::Migration[6.1]
  def change
    create_table :miniatures do |t|
      t.string :name
      t.string :rarity
      t.string :size
      t.string :comments
      t.integer :miniature_set_id
      t.string :img_url

      t.references :user, foreign_key: true
    end
  end
end
