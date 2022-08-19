class CreateFriendRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :friend_requests do |t|
      t.integer :requestor_id
      t.integer :receiver_id

      t.timestamps
    end
  end
end
